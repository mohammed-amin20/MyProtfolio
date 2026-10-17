"""Regenerate the decorative hero code without changing its foreground content."""
from html import escape
from pathlib import Path
import re

SNIPPETS = [
    ('compose', 'MainScreen.kt', '''@Composable
fun MainScreen(state: UiState, onExplore: () -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
        Text("Made with care")
        Text("Small details. Better experiences.")
        if (state.loading) {
            CircularProgressIndicator()
        } else {
            Button(onClick = onExplore) {
                Text("Explore")
            }
        }
    }
}'''),
    ('viewmodel', 'HomeViewModel.kt', '''@HiltViewModel
class HomeViewModel @Inject constructor(
    private val repository: NotesRepository
) : ViewModel() {
    private val _state = MutableStateFlow(UiState())
    val state: StateFlow<UiState> = _state.asStateFlow()

    fun refresh() = viewModelScope.launch {
        _state.update { it.copy(loading = true) }
        repository.loadNotes().onSuccess { notes ->
            _state.update { it.copy(notes = notes) }
        }
        _state.update { it.copy(loading = false) }
    }
}'''),
    ('contract', 'UiState.kt', '''sealed interface UiAction {
    data object Refresh : UiAction
    data class Search(val query: String) : UiAction
}
data class UiState(
    val loading: Boolean = false,
    val notes: List<Note> = emptyList()
)
fun onAction(action: UiAction) {
    when (action) {
        UiAction.Refresh -> refresh()
        is UiAction.Search -> search(action.query)
    }
}'''),
    ('flutter', 'main.dart', '''class HomeScreen extends StatelessWidget {
    const HomeScreen({super.key});

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('Your workspace')),
            body: SafeArea(
                child: Padding(
                    padding: EdgeInsets.all(24),
                    child: Text('Build something thoughtful'),
                ),
            ),
        );
    }
}'''),
    ('dao far', 'NoteDao.kt', '''@Dao
interface NoteDao {
    @Query("SELECT * FROM notes ORDER BY title")
    fun observeNotes(): Flow<List<Note>>

    @Upsert
    suspend fun save(note: Note)

    @Query("DELETE FROM notes WHERE id = :id")
    suspend fun delete(id: Long)
}'''),
    ('repository far', 'NotesRepository.kt', '''suspend fun loadNotes(): Result<List<Note>> {
    return try {
        val notes = source.fetchNotes()
        cache.saveAll(notes)
        Result.success(notes)
    } catch (error: Exception) {
        if (error is CancellationException) throw error
        Result.failure(error)
    }
}
fun observeNotes(): Flow<List<Note>> = cache.observeAll()'''),
    ('navigation extra', 'NavGraph.kt', '''@Composable
fun AppNavigation(controller: NavHostController) {
    NavHost(controller, startDestination = "home") {
        composable("home") {
            HomeRoute(onOpenNote = { id ->
                controller.navigate("note/$id")
            })
        }
        composable("note/{id}") { entry ->
            NoteRoute(id = entry.arguments?.getString("id"))
        }
    }
}'''),
    ('flow extra', 'ObserveNotes.kt', '''class ObserveNotes @Inject constructor(
    private val repository: NotesRepository
) {
    operator fun invoke(query: Flow<String>) =
        combine(repository.observeNotes(), query) { notes, text ->
            notes.filter { note ->
                note.title.contains(text, ignoreCase = true)
            }
        }
        .distinctUntilChanged()
        .flowOn(Dispatchers.Default)
}'''),
    ('notifier extra', 'notes_controller.dart', '''class NotesController extends ChangeNotifier {
    final NotesRepository repository;
    List<Note> notes = [];
    bool loading = false;

    NotesController(this.repository);

    Future<void> refresh() async {
        loading = true;
        notifyListeners();
        try {
            notes = await repository.load();
        } finally {
            loading = false;
            notifyListeners();
        }
    }
}'''),
]

TOKEN = re.compile(r'''("[^"\n]*"|'[^'\n]*'|@\w+|\b(?:fun|class|val|var|private|interface|sealed|data|object|when|return|const|extends|suspend|try|catch|if|else|throw|false|true|is|operator|final|bool|async|await|finally)\b|\b\d+\b|\b[A-Z]\w*\b|\b\w+(?=\())''')


def highlight(line):
    parts = TOKEN.split(line)
    for index in range(1, len(parts), 2):
        value = parts[index]
        kind = 'string' if value.startswith(('"', "'")) or value.isdigit() else 'type' if value[0].isupper() else 'keyword'
        parts[index] = f'<span class="code-{kind}">{escape(value)}</span>'
    return ''.join(value if index % 2 else escape(value) for index, value in enumerate(parts))


def build():
    panes = []
    for classes, filename, source in SNIPPETS:
        lines = source.splitlines()
        markup = ''.join(f'<span class="code-line"><i>{number:02}</i><span>{highlight(line)}</span></span>' for number, line in enumerate(lines, 1))
        snippet = f'<div class="code-snippet">{markup}</div>'
        panes.append(f'<div class="code-pane code-{classes.replace(" ", " code-")}" style="--code-lines:{len(lines)}"><div class="code-tab">{filename}</div><div class="code-window"><div class="code-scroll">{snippet}{snippet}</div></div></div>')
    terminal = '$ ./gradlew assembleDebug\nBUILD SUCCESSFUL\n\n$ flutter run\nApplication ready.\n\n$ git commit -m "feat: refine home screen"\nChanges committed.'
    panes.append('<div class="code-pane code-terminal"><div class="code-tab">terminal</div><pre><code>' + escape(terminal) + '</code><span class="code-cursor">▏</span></pre></div>')
    markup = '<div class="living-code" aria-hidden="true" dir="ltr"><div class="code-glows"></div><div class="code-field"><div class="code-depth">' + ''.join(panes) + '</div><div class="code-spot"></div></div></div>'
    path = Path(__file__).resolve().parents[1] / 'index.html'
    html = path.read_text(encoding='utf-8')
    start = html.index('<div class="living-code"')
    end = html.index('<div class="hero-copy"', start)
    path.write_text(html[:start] + markup + html[end:], encoding='utf-8')


if __name__ == '__main__':
    build()
