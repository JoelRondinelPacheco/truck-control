function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-slate-500 p-2 mb-4">
        <section>
            <h2>TRUCKCONTROL</h2>
            <h1>Gestión de Flota</h1>
        </section>
        <section>
            <div>
                <input type="text" placeholder="Busqueda" />
            </div>
        </section>
    </header>
  )
}

export default Header