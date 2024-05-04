


const Logo = ({logo}) => {
    return (
        <div className="w-14 h-14 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={`./logos/${logo}`} alt="Your Image" />
        </div>
    )
}

export default Logo