import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceb } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <hr />
                        <h3>About Us</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.</p>
                        <div class="icons">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div className="card2">
                        <p>Made with <i class="fas fa-heart"></i> by <a href="javascript:void(0)">Sagar Developer</a></p>
                        <p>Copyright © 2021 <a href="javascript:void(0)">Xplore Skill</a>. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
