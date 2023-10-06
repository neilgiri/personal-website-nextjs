import {ReactNode} from 'react';
import ExtLink from './ExtLink';
import IconImage from './IconImage';
import personalInfo from './data/personalInfo.json';


interface BoxProps {
    href: string;
    label: string;
    onClick?: () => void;
    children: ReactNode;
};

const Box = ({href, label, onClick, children}: BoxProps) => (
    <a target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={label}
        className="items-center justify-center cursor-pointer transition-colors rounded-md select-none w-7 h-7"
        onClick={onClick}>
        {children}
    </a>
);


const Footer = (): JSX.Element => {
    const iconStyle = "hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md";

    return (
        <footer>
            <div className="mb-9 pb-0 pl-6 max-w-4xl flex items-center justify-between text-sm opacity-60 m-auto pt-20 pr-5">
                <p> &copy; {new Date().getFullYear()}. {personalInfo.copyright}</p>


                <div className="flex justify-between w-44">
                    <Box href="/cv.pdf" label="CV">
                        <IconImage path='/images/cv-file-interface-symbol-svgrepo-com.svg' name="CV"/>
                    </Box>
                    <Box href={personalInfo.socialMedia.Github} label="Github">
                        <IconImage path='/images/github-mark.svg' name="Github"/>
                    </Box>
                    <Box href={personalInfo.socialMedia.LinkedIn} label="LinkedIn">
                        <IconImage path='/images/icons8-linkedin.svg' name="LinkedIn"/>
                    </Box>
                </div>    
            </div>
            
        </footer>
    );
};

export default Footer;
