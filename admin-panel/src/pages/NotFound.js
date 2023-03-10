import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const pathname = window.location.pathname;
        if (pathname.indexOf("/admin") >= 0) {
            setIsAdmin(true);
        }
    }, []);
    return (
        <div
            className="not-found-wrapper"
            style={isAdmin ? {} : { height: "100vh" }}
        >
            <h4>
                404
                <br />
                Page Not Found
            </h4>
            {isAdmin && <Link to="/admin">Go back to dashboard</Link>}
            {!isAdmin && <Link to="/">Go back to Login Page</Link>}
        </div>
    );
};

export default NotFound;
