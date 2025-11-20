function Button({label = 'Default Label'}) 
{
    return(
        <button className="bg-amber-300 px-2 border-0 rounded-2xl">
            {label}
        </button>
    );
}
export default Button;