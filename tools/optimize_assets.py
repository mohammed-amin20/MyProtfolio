"""Generate optimized WebP derivatives for the portfolio imagery. Run from project root.

Screenshots keep their native dimensions (the lightbox needs the detail); logos and
the profile portrait are resized. Originals are kept as the <picture> fallback.
"""
from pathlib import Path
from PIL import Image

PROJECT_DIRS = ['devz', 'memo', 'dictionary', 'rick-and-morty']
SCREEN_EXT = {'.png', '.jpeg', '.jpg'}
SCREEN_QUALITY = 82
LOGO_MAX = 128
PROFILE_WIDTHS = [480, 720, 960, 1440]


def save_webp(image, destination, quality, **kwargs):
    image.save(destination, 'WEBP', quality=quality, method=6, **kwargs)


def optimize_screens():
    total_before = total_after = 0
    count = 0
    for name in PROJECT_DIRS:
        folder = Path('assets') / name
        for source in sorted(folder.iterdir()):
            if source.suffix.lower() not in SCREEN_EXT or source.stem.startswith('logo'):
                continue
            destination = source.with_suffix('.webp')
            with Image.open(source) as image:
                image = image.convert('RGBA' if image.mode in ('RGBA', 'LA', 'P') else 'RGB')
                save_webp(image, destination, SCREEN_QUALITY)
            total_before += source.stat().st_size
            total_after += destination.stat().st_size
            count += 1
    return count, total_before, total_after


def optimize_logos():
    changed = []
    for name in PROJECT_DIRS:
        source = Path('assets') / name / 'logo.png'
        if not source.exists():
            continue
        destination = source.with_suffix('.webp')
        with Image.open(source) as image:
            image = image.convert('RGBA')
            scale = LOGO_MAX / max(image.size)
            if scale < 1:
                image = image.resize((round(image.width * scale), round(image.height * scale)), Image.LANCZOS)
            save_webp(image, destination, 88)
        changed.append(f'{source.as_posix()} ({source.stat().st_size // 1024}KB -> {destination.stat().st_size // 1024}KB)')
    return changed


def optimize_profile():
    source = Path('assets') / 'profile.png'
    outputs = []
    with Image.open(source) as image:
        image = image.convert('RGBA')
        for width in PROFILE_WIDTHS:
            if width > image.width:
                continue
            height = round(image.height * width / image.width)
            resized = image.resize((width, height), Image.LANCZOS)
            destination = source.with_name(f'profile-{width}.webp')
            save_webp(resized, destination, 84)
            outputs.append(f'{destination.as_posix()} ({destination.stat().st_size // 1024}KB)')
    return outputs


def optimize_certificates():
    total_before = total_after = 0
    count = 0
    for source in sorted(Path('certificates').glob('*/*.png')):
        destination = source.with_suffix('.webp')
        with Image.open(source) as image:
            image = image.convert('RGBA' if image.mode in ('RGBA', 'LA', 'P') else 'RGB')
            save_webp(image, destination, 86)
        total_before += source.stat().st_size
        total_after += destination.stat().st_size
        count += 1
    return count, total_before, total_after


if __name__ == '__main__':
    count, before, after = optimize_screens()
    print(f'Screens: {count} converted, {before // 1024 // 1024}MB -> {after // 1024}KB')
    count, before, after = optimize_certificates()
    print(f'Certificates: {count} converted, {before // 1024}KB -> {after // 1024}KB')
    for line in optimize_logos():
        print(f'Logo: {line}')
    for line in optimize_profile():
        print(f'Profile: {line}')
