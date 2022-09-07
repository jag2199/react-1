export default function Footer() {
    return (
        <footer className="mt-5">
            <div className="container-fluid">
                <div className="row bg-dark align-items-center">
                    <div className="col-lg-3 d-flex justify-content-center col-3">
                        <img className="logoEdit" src="https://firebasestorage.googleapis.com/v0/b/react-1-a3a46.appspot.com/o/logo.png?alt=media&token=9c1f9376-4f50-429b-bbc1-31dce3c55dbd" alt="logo calaca" />
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center col-3">
                        <a href="https:/www.twitter.com/Belgrano">
                            <img className="imgSize" width="50px" height="50px" src="https://firebasestorage.googleapis.com/v0/b/react-1-a3a46.appspot.com/o/tw2.png?alt=media&token=0cfea850-27f4-46fd-8f87-fe7625daeec3" alt="twitter" />
                        </a>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center col-3">
                        <a href="https:/www.instagram.com/clubatleticobelgrano">
                            <img className="imgSize" width="50px" height="50px" src="https://firebasestorage.googleapis.com/v0/b/react-1-a3a46.appspot.com/o/ig.png?alt=media&token=408839b0-e350-4f9b-983b-12350830a598" alt="instagram" />
                        </a>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center col-3">
                        <a href="https:/www.facebook.com">
                            <img className="imgSize" width="50px" height="50px" src="https://firebasestorage.googleapis.com/v0/b/react-1-a3a46.appspot.com/o/fb2.png?alt=media&token=21b282fc-8a58-4ed1-94ae-ab68a428b294" alt="facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}