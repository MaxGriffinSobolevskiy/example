import style from './Button.module.css';


const click = () => {
    console.log('КЛІК');
}

const Button = () => (
    <>
        <button className={style.button} onClick={click}>
            <img src="./images/envelope(hover).svg" alt="" />
            <img src='./img/burger-ayam.jpg' alt='svg' width='100'/>
        </button>
    </>
    
)

export default Button;

 <img src="./images/envelope(hover).svg" alt="" />