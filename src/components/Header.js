import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/noto-v1/volcano';

/**
 * Header component contains a short title for the project and a
 * volcano icon from '@iconify' NPM module.
 */
const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={volcanoIcon} /> Volcano Tracker (built by @madebybk)</h1>
        </header>
    )
}

export default Header
