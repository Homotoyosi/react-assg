import logo from "../assets/logo.svg"
const Header = () =>{
    return (
        <div>
             <div class="navigation">
            <main class="navi">
                <div class="navlogo">
                    <img src={logo} alt=""/>
                </div>
                <div class="navlinks">
                    <nav>Feature</nav>
                    <nav>Company</nav>
                    <nav>Career</nav>
                    <nav>About</nav>
                </div>

            </main>
            <main class="navbtn">
                <div class="loginbtn">
                    Login
                </div>
                <div class="btn-1">
                    <button>Register</button>

                </div>
                <img class="icon-menu" src="./images/icon-menu.svg"/>
            </main>

        </div>

        </div>
    )
}
export default Header