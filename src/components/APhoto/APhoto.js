import React from 'react';
import './APhoto.css';

const APhoto = props => {

    function handleBack(){
        props.back(false)
    }

    return (props.trigger) ?(
        <div className='all_photo'>
            <div className='photo_back' onClick={handleBack}>{"<Back"}</div>
            <div className='photo_box'>
                <div className='in_photo_box'>
                    <div className='in_photo_box_photo_center'><img className='the_photo' src={"https://drive.google.com/uc?export=view&id="+props.selection.tag} alt="" /></div>
                    <div className='the_photo_text'>
                        <div className='the_photo_name'>{props.selection.name}</div>
                        <div className='the_photo_info'>{props.selection.info}</div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default APhoto;