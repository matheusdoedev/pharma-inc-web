import { createGlobalStyle } from 'styled-components';

import theme from '../settings/theme';

const Elements = createGlobalStyle`
	h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
		font-family: ${theme.fonts.fontPrimary};
        font-weight: 700;
    }

    h1 {
        font-size: 4.8rem;
    }

    h2 {
        font-size: 3.6rem;
    }

    h3 {
        font-size: 2.4rem;
    }

    h4 {
        font-size: 1.8rem;
    }

	ul {
    	list-style: none;
  	}

	p {
		font-family: ${theme.fonts.fontSecondary ?? theme.fonts.fontPrimary};
		font-size: 1.6rem;
        line-height: 1.5em;
        max-width: 30em;
        font-weight: 400;

		@media (max-width: 768px) {
			max-width: 100%;
		}
	}

	a {
		font-family: ${theme.fonts.fontPrimary};
		font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.1em;
		padding: 1rem;
		text-decoration: none;
		transition: opacity 300ms ease-in-out;

		&:hover {
			cursor: pointer;
			opacity: .6;
		}
	}

	button,
    input,
    span,
    label,
    select,
    option,
    th,
    td {
		font-family: ${theme.fonts.fontSecondary ?? theme.fonts.fontPrimary};
        font-size: 1.6rem !important;
        line-height: 1.1em;
        font-weight: 400;
    }


	img {
        display: block;
        width: 100%;
    }

	ul {
        list-style: none;
    }

	fieldset {
        border: none;
    }

	@media (max-width: 768px) {
		h1 {
            font-size: 3.6rem;
        }

        h2 {
            font-size: 2.4rem;
        }

        h3 {
            font-size: 1.8rem;
        }

        h4 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1.4rem;
        }

        a,
        button,
        input,
        span {
            font-size: 1.4rem;
        }
	}
`;

export default Elements;
