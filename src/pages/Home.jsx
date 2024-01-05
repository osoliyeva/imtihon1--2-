import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/main.css";

const Home = () => {
    const [frontend_technologies_data, set_frontend_technologies_data] =
        useState([]);

    const get_menu_data = async () => {
        try {
            const res = await fetch(
                "http://localhost:3000/frontend_technologies"
            );
            const result = await res.json();
            set_frontend_technologies_data(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect( () => {
        get_menu_data()
    }, []);
    return (
        <main className="app_section">
            <div className="main_section">
                <div className="title_section">
                    <div>
                        <h2>Welcome to the</h2>
                        <h2> Frontend Quiz!</h2>
                    </div>
                    <p>Pick a subject to get started.</p>
                </div>
                <div className="question_buttons">
                    {frontend_technologies_data.map((item) => (
                        <NavLink
                            className="link"
                            to={`question/${item.id}`}
                            key={item.id}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <i
                                    style={{
                                        backgroundColor: item.iconBoxColor,
                                        borderRadius: "8px",
                                        padding: 8,
                                    }}
                                    className="svg_icon"
                                    dangerouslySetInnerHTML={{
                                        __html: item.svg,
                                    }}
                                />
                                <h3>{item.title}</h3>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;
