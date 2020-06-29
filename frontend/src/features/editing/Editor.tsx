import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setText, selectText } from './liveEditing';

export function Editor() {
    const dispatch = useDispatch();

    let text = useSelector(selectText);
    
    return (
        <div>
            <textarea value={text} name="Text Editor" cols={100} rows={20} onChange={(e) => dispatch(setText(e.target.value))} />
        </div>
    )
}