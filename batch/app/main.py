import typer

from entrypoints.v1 import input, output, sim

app = typer.Typer()
app.add_typer(input.app, name="input")
app.add_typer(output.app, name="output")
app.add_typer(sim.app, name="sim")


if __name__ == "__main__":
    app()
