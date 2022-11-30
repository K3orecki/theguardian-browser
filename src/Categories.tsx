import { ReactElement } from 'react';
import type { ResponseSectionsResults } from './Types';
import type { SectionsData } from './Categories.types';

export default function Categories(props: SectionsData): ReactElement {
    const sectionsData = props.sectionsData;
    const searchParams = props.searchParams;
    const currentSection = searchParams.get('section');
    const items = sectionsData.map((section: ResponseSectionsResults) =>
        <li 
            key={section.id} 
            className='main-category' 
            data-href={section.webUrl}
            onClick={() => {
                props.onClick(section.id);
            }}
            data-selected={(section.id === currentSection) ? true : false}
        >
            {section.webTitle}
        </li>
    );
    
    return (
        <ul className='categories'>
            {items}
        </ul>
    );
}