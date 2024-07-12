import Picture from './picture.png'

function PictureBox() {
    return (  
        <div className= 'w-auto h-auto p-4 border-2 border-gray-300 rounded-lg'>
            <img src={Picture} alt='lake' className='w-96 h-auto'/>
        </div>
    );
}
    
export default PictureBox;
    