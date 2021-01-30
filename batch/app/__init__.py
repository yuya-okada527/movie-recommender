import sys
import os
from pathlib import Path

__version__ = '0.1.0'

app_path = os.path.join(
    Path(__file__).resolve().parents[1],
    "app"
)

print(app_path)

sys.path.append(app_path)