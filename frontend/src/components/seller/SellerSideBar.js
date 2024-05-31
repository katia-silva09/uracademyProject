import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assest/Panel/Panel.svg';

function SellerSideBar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { to: "/seller/dashboard", text: "Panel de control" },
        { to: "/seller/course", text: "Courses" },
        { to: "/seller/add-course", text: "Add course" },
        { to: "/seller/orders", text: "Orders" },
        { to: "/seller/customers", text: "Customers" },
        { to: "/seller/reports", text: "Reports" },
        { to: "/seller/profile", text: "Profile" },
        { to: "/seller/change-password", text: "Change Password" },
        { to: "/", text: "Log Out", className: "text-danger" },
    ];

    const sidebarStyle = {
        height: isOpen ? 'auto' : '0',
        overflow: 'hidden',
        fontFamily: 'ADLaM Display',
        
        // background: 'purple',
        padding: isOpen ? '10px' : '0',
        transition: 'height 0.3s ease-out, padding 0.3s ease-out',
    };

    const linkStyle = {
        color: 'DarkSlateGray',       
        display: isOpen ? 'block' : 'none',
        textAlign: 'center',
        fontSize:20
    };

    const buttonStyle = {
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '300px',
        height: '50px',
        border: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        textAlign: 'center',
        padding: '10px',
        marginBottom: isOpen ? '10px' : '0',
    };

    return (
        <div>
            <Button onClick={toggleSidebar} style={buttonStyle}>
                {isOpen ? 'Close Panel' : 'Open Panel'}
            </Button>
            <div style={isOpen ? sidebarStyle : { ...sidebarStyle, paddingTop: 0, paddingBottom: 0 }}> {/* Agregamos paddingTop y paddingBottom 0 cuando está cerrado */}
                {links.map((link, index) => (
                    <div key={index} className={`card mb-3 ${link.className ? 'border-danger' : 'border-dark' }`} style={{ maxWidth: '18rem' }}>
                        <div className="card-body">
                            <Link to={link.to} className={`list-group-item list-group-item-action ${link.className || ''}`} style={linkStyle}>
                                {link.text}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SellerSideBar;
