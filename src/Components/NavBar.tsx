import "../App.css"

const NavBar = () => {
  return (
<nav className="flex items-center justify-between h-16 px-6 border-b border-[#E5E7EB] bg-white">
  <span className="text-lg font-semibold text-[#111827]">
    CalorieCalc
  </span>

  <div className="flex gap-6 text-[#111827]">
    <a href="#">Kalkylator</a>
    <a href="#">Program</a>
    <a href="#">Om</a>
    <a href="#">GitHub</a>
  </div>
</nav>

  )
}

export default NavBar