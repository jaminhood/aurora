export type HeaderContentTypes = {
	navbarOpen: boolean;
	toggleNavbar: () => void;
};

export type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;
