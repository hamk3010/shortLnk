import React from 'react';
import { browserHistory } from 'react-router';
import {Links} from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default () => {
    return (
         <div>
             <PrivateHeader title= "Yo links"/>
             <LinksList/>
             <AddLink/>
         </div>
     );

};
