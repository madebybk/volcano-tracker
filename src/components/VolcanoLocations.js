import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/noto-v1/volcano';

const VolcanoLocations = ({ lat, lng, onClick }) => {
    /**
     * VolcanoLocations component displays a volcano icon, from iconify NPM module,
     * at each volcano event location.
     */
    return (
        <div className='volcano-locations' onClick={onClick}>
            <Icon icon={volcanoIcon} className='volcano-icon' />
        </div>
    )
}

export default VolcanoLocations
