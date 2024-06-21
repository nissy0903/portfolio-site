import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div className="home-wraper">
            <div className="home">
                <div className="home-title"><h1>Home</h1></div>
                <div className="home-links">
                    <div className="home-item">
                        <Link to="/calc">
                            <img src="/calc_icon.png"/>
                            <p>電卓</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/todo">
                            <img src="/todo_icon.png"/>
                            <p>Todoリスト</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/wheather">
                            <img src="/wheather_icon.png"/>
                            <p>天気</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                    <div className="home-item">
                        <Link to="/none">
                            <img src="/no_icon.png"/>
                            <p>none</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;

//1102x925