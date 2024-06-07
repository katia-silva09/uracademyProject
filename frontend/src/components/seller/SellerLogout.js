function SellerLogout(){
    localStorage.removeItem('instructor_login');
    localStorage.removeItem('instructor_username');
    window.location.href='/seller/login'
}
export default SellerLogout;