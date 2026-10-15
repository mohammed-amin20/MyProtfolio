<div align="center">

<img src="app/src/main/res/mipmap-nodpi/memo_launcher.png" width="120" alt="Memo logo"/>

# Memo | ميمو

The offline-first notes app for Android.

Write, search, organize, and protect notes that live entirely on your device —
no account in the cloud, no backend, and no network access required.

[Features](#features) &middot; [Screenshots](#screenshots) &middot; [Getting started](#getting-started) &middot; [Privacy](#privacy-and-data) &middot; [Limitations](#limitations)

---

![Kotlin 2.1.21](https://img.shields.io/badge/Kotlin-2.1.21-7F52FF?style=flat-square&logo=kotlin&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack%20Compose-4285F4?style=flat-square&logo=jetpackcompose&logoColor=white)
![Material 3](https://img.shields.io/badge/Material%203-7C4DFF?style=flat-square&logo=materialdesign&logoColor=white)
![Room](https://img.shields.io/badge/Room-2E7D32?style=flat-square&logo=sqlite&logoColor=white)
![Hilt](https://img.shields.io/badge/Hilt-026E9D?style=flat-square)
![minSdk 26](https://img.shields.io/badge/minSdk-26-EB732D?style=flat-square)
![targetSdk 35](https://img.shields.io/badge/targetSdk-35-1089D1?style=flat-square)

</div>

## Features

| Area | What Memo does |
|------|----------------|
| **Accounts** | Local sign-up and login with a session-restore splash. Credentials are stored on the device and never sent anywhere. |
| **Notes & editor** | Create, edit, and delete notes. The editor shows live word and character counts and the note's absolute timestamp. |
| **Search** | Instant, case-insensitive filtering of titles and body text as you type. |
| **Categories & filters** | Filter chips for All, Pinned, Work, and Personal, plus a per-note category selector. |
| **Pin / unpin** | Pin important notes so they float above the rest of the list. |
| **Multi-select** | Select several notes at once to delete, pin/unpin, or hide them — including "Select all". |
| **Undo delete** | Deleted notes can be restored for a few seconds after the action. |
| **Hidden vault** | Private notes are hidden behind a 4-digit PIN and stored encrypted (see [Privacy](#privacy-and-data)). |
| **Themes** | System, Light, or Dark (Material 3); your choice is persisted across restarts. |
| **Languages** | English and Arabic with full RTL support, including an Arabic-Indic keypad for the PIN. |

## Screenshots

All screenshots are **Jetpack Compose `@Preview` renders** of the actual UI
code — they show the layout and theme, not the result of an installed build.

### Notes list

<table>
  <tr>
    <td width="50%" align="center">Light</td>
    <td width="50%" align="center">Dark</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/notes-light.png" width="250" alt="Notes list, light theme"/></td>
    <td align="center"><img src="docs/screenshots/notes-dark.png" width="250" alt="Notes list, dark theme"/></td>
  </tr>
</table>

### Add / edit note

> The editor shares the note-card bounds with the list via Compose shared
> element transitions.

<table>
  <tr>
    <td width="50%" align="center">Light</td>
    <td width="50%" align="center">Dark</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/add-edit-note-light.png" width="250" alt="Add or edit note, light theme"/></td>
    <td align="center"><img src="docs/screenshots/add-edit-note-dark.png" width="250" alt="Add or edit note, dark theme"/></td>
  </tr>
</table>

### Settings

<table>
  <tr>
    <td width="50%" align="center">Light</td>
    <td width="50%" align="center">Dark</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/settings-light.png" width="250" alt="Settings screen, light theme"/></td>
    <td align="center"><img src="docs/screenshots/settings-dark.png" width="250" alt="Settings screen, dark theme"/></td>
  </tr>
</table>

<details>
<summary><strong>Settings states</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">Log-out dialog</td>
    <td width="50%" align="center">Compact layout</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/settings-logout-dialog-light.png" width="250" alt="Log out confirmation dialog, light theme"/></td>
    <td align="center"><img src="docs/screenshots/settings-narrow-light.png" width="250" alt="Settings on a narrow screen, light theme"/></td>
  </tr>
</table>

</details>

<details>
<summary><strong>Authentication — splash, sign up, login</strong></summary>

The app opens on a branded splash while the session is restored: an
authenticated session goes straight to the notes list, a signed-out one lands
on the auth flow.

<table>
  <tr>
    <td width="50%" align="center">Splash</td>
    <td width="50%" align="center">Splash — dark</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/splash-light.png" width="250" alt="Splash screen, light theme"/></td>
    <td align="center"><img src="docs/screenshots/splash-dark.png" width="250" alt="Splash screen, dark theme"/></td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">Sign up</td>
    <td width="50%" align="center">Sign up — dark</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/signup-light.png" width="250" alt="Sign up screen, light theme"/></td>
    <td align="center"><img src="docs/screenshots/signup-dark.png" width="250" alt="Sign up screen, dark theme"/></td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">Login</td>
    <td width="50%" align="center">Login — dark</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/login-light.png" width="250" alt="Login screen, light theme"/></td>
    <td align="center"><img src="docs/screenshots/login-dark.png" width="250" alt="Login screen, dark theme"/></td>
  </tr>
</table>

</details>

<details>
<summary><strong>Search and selection</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">Search results</td>
    <td width="50%" align="center">No results</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/search-light.png" width="250" alt="Searching notes, light theme"/></td>
    <td align="center"><img src="docs/screenshots/search-dark.png" width="250" alt="Search with no results, dark theme"/></td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">Empty state</td>
    <td width="50%" align="center">Selection mode</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/no-notes-light.png" width="250" alt="Empty notes list, light theme"/></td>
    <td align="center"><img src="docs/screenshots/selected-dark.png" width="250" alt="Multi-select notes, dark theme"/></td>
  </tr>
</table>

</details>

<details>
<summary><strong>Hidden notes and PIN</strong></summary>

<table>
  <tr>
    <td width="50%" align="center">PIN setup</td>
    <td width="50%" align="center">Confirm step</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/pin-setup-light.png" width="250" alt="PIN setup, light theme"/></td>
    <td align="center"><img src="docs/screenshots/pin-setup-confirm.png" width="250" alt="PIN setup confirmation step"/></td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">PIN mismatch</td>
    <td width="50%" align="center">PIN setup — dark</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/pin-setup-mismatch.png" width="250" alt="PIN mismatch warning"/></td>
    <td align="center"><img src="docs/screenshots/pin-setup-dark.png" width="250" alt="PIN setup, dark theme"/></td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">PIN verification</td>
    <td width="50%" align="center">Forgot PIN dialog</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/pin-verify-light.png" width="250" alt="PIN verification, light theme"/></td>
    <td align="center"><img src="docs/screenshots/pin-verify-forget-dialog.png" width="250" alt="Forgot PIN dialog"/></td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">Vault locked</td>
    <td width="50%" align="center">PIN verification — dark</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/pin-verify-locked.png" width="250" alt="Vault locked state"/></td>
    <td align="center"><img src="docs/screenshots/pin-verify-dark.png" width="250" alt="PIN verification, dark theme"/></td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">Hidden notes list</td>
    <td width="50%" align="center">Selection mode</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/hidden-notes-list-light.png" width="250" alt="Hidden notes list, light theme"/></td>
    <td align="center"><img src="docs/screenshots/hidden-notes-select-mode.png" width="250" alt="Hidden notes selection mode"/></td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">Hidden notes list — dark</td>
    <td width="50%" align="center">Empty hidden list</td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/hidden-notes-list-dark.png" width="250" alt="Hidden notes list, dark theme"/></td>
    <td align="center"><img src="docs/screenshots/hidden-notes-empty.png" width="250" alt="Empty hidden notes list"/></td>
  </tr>
</table>

</details>

## Getting started

### Prerequisites

- **JDK 17** — required by Android Gradle Plugin **8.9.2**. Android Studio's
  bundled JBR works out of the box.
- **Android SDK**: `compileSdk` 35, `targetSdk` 35, `minSdk` 26 (Android 8.0+).
- **Android Studio** (or a CLI with `ANDROID_HOME` set / `local.properties`
  present). The Gradle wrapper is pinned to **8.12.1**.

### Setup

1. Clone the repository.
2. Open it in Android Studio and let it sync (this creates `local.properties`
   with your `sdk.dir` automatically) — or set `ANDROID_HOME` yourself for
   command-line builds.
3. No API keys, secrets, or environment variables are required. The only
   network access involved is downloading Gradle/AGP dependencies on the first
   build.

### Build the debug APK

A build does **not** require a connected device.

```powershell
# Windows (PowerShell / cmd)
.\gradlew.bat :app:assembleDebug
```

```bash
# macOS / Linux
./gradlew :app:assembleDebug
```

The debug APK is written to `app/build/outputs/apk/debug/app-debug.apk`.

### Install on a device (optional)

Installation needs an Android device or emulator with USB debugging enabled:

```powershell
.\gradlew.bat :app:installDebug   # Windows
```

```bash
./gradlew :app:installDebug       # macOS / Linux
```

Or press **Run** in Android Studio. Note that debug builds are signed with the
debug keystore, not intended for distribution.

## Architecture and development

Single-module Android app (`:app`), organized by feature:

| Technology | Version | Usage |
|------------|---------|-------|
| Kotlin | 2.1.21 | Language |
| Jetpack Compose | BOM 2025.05.00 | UI toolkit |
| Material 3 | BOM 2025.05.00 | Design system |
| Room | 2.7.1 | Local database (`notes_db`) |
| Hilt | 2.56.2 | Dependency injection |
| Navigation Compose | 2.9.0 | In-app navigation |
| kotlinx.serialization | 1.8.0 | Structured data |
| Android Gradle Plugin | 8.9.2 | Build tooling |

Project layout:

```
app/src/main/java/com/mohammed/notes/
├── MainActivity.kt          # Single activity; theme, locale, navigation root
├── NotesApp.kt              # Application (Hilt)
├── feature/auth/            # Sign up / login screens
├── feature/note/            # Notes list, search, selection, editor
├── feature/privacy/         # PIN setup/verify, hidden notes vault
├── feature/settings/        # Appearance, language, privacy, account
├── feature/core/            # Database, security, DI, shared UI/startup
└── ui/                      # Theme (colors, type, shapes) and locale
```

### Tests and checks

The repository includes the following tests and checks. They are listed here as
the project's available commands; whether every case currently passes is not
claimed in this document.

```powershell
.\gradlew.bat :app:testDebugUnitTest            # JVM unit tests
.\gradlew.bat :app:lintDebug                    # Android lint
.\gradlew.bat :app:connectedDebugAndroidTest    # instrumented tests (device required)
```

(applying the equivalent `./gradlew ...` forms on macOS/Linux).

## Privacy and data

### Where data lives

All data stays on the device — in a local Room database and Android shared
preferences. There is no backend, no cloud sync, and no analytics.

**Important:** account credentials are **not encrypted in storage.** Usernames
and passwords are stored and validated locally in plaintext, exactly like most
local-first apps. Do not reuse a password you use anywhere else.

### Ordinary notes vs. hidden notes

- **Ordinary notes** are stored as visible, plaintext rows in the local
  database and appear in the list, search, and pinned sections.
- **Hidden notes** never appear in the list, search, or pinned sections. Their
  content is encrypted before it is written:
  - **AES-256-GCM** encryption with a fresh random nonce per note.
  - The per-note data key is itself wrapped (encrypted) by an **AES-256-GCM
    master key held in the Android KeyStore** — a key that never leaves the
    device and dies with an uninstall.
  - The vault is protected by a **4-digit PIN** (with Arabic-Indic digit
    support). The PIN is **never stored**: only a salted **PBKDF2-HMAC-SHA256**
    verifier at **600,000 iterations** is kept, and digests are compared in
    constant time.

### Wrong-PIN protection

Five or more consecutive wrong PINs lock the vault for escalating periods:
30 seconds, 1 minute, 5 minutes, 15 minutes, 30 minutes, then 1 hour. The vault
also locks automatically whenever the app is backgrounded.

### "Forgot PIN?" — the recovery policy

If the PIN is forgotten, the app offers a reset that **permanently deletes all
hidden notes and the PIN itself.** This is Memo's chosen recovery policy: the
encryption key is unrecoverable without the PIN, so the app cannot restore the
content — and by design it destroys the hidden rows so nothing remains
indecipherable.

### Android backup behavior

`android:allowBackup` is enabled and the backup/device-transfer rules exclude
only the app's privacy prefs file (`privacy_prefs.xml`). In practice:

- Ordinary notes and account rows **can** be restored through Android Auto
  Backup / device transfer.
- The PIN verifier, wrapped data key, and throttle counters are **excluded**
  from backup. After a restore or a device migration, hidden notes may come
  back as rows that can no longer be decrypted; Memo surfaces those rows as
  "broken" so they can still be deleted.

### Startup flow

On launch the app shows a branded splash while it restores the saved session —
then routes to the **notes list** if the stored account is still valid, or to
**login/sign-up** when signed out.

## Limitations

- **Local only.** No sync, no backup to your own cloud, no export. Clearing
  app data or uninstalling erases everything on the device (an Android Auto
  Backup restore may bring ordinary data back — see
  [Android backup behavior](#android-backup-behavior)).
- **Plaintext credentials.** Local account passwords are stored and validated
  in plaintext — treat them as app-local secrets.
- **KeyStore dependency.** Hidden-note security relies on the Android KeyStore.
  A device that loses its KeyStore keys (some restores, certificate changes)
  cannot decrypt hidden content.
- **Escalating lockout.** Five or more wrong PIN attempts can lock you out for
  up to an hour.
- **Destructive PIN reset.** Choosing "Forgot PIN?" deletes hidden notes and
  the PIN permanently; there is no way to recover them.

## Developer

Developed by **Mohammed Amin Ghazal** — [GitHub](https://github.com/mohammed-amin20)