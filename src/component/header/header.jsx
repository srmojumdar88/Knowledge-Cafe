import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between border-b-4 p-4'>
            <h2 className="text-4xl font-bold">Knowledge cafe</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;