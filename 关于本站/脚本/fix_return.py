import re
from pathlib import Path
from difflib import unified_diff

PATTERN = re.compile(r"\n*(\[◀返回\].+?\))\n+(# .+?)\n")
REPLACEMENT = r"\2\n\n\1\n"

for file in Path(".").rglob("*.md"):
    content = file.read_text("utf-8")
    fixed_content = PATTERN.sub(REPLACEMENT, content)

    diff = [
        *unified_diff(
            content.splitlines(),
            fixed_content.splitlines(),
            n=1,
        )
    ]
    if diff:
        if not input("\n".join(diff)).lower().startswith(("n", "f")):
            file.write_text(fixed_content, "utf-8")
