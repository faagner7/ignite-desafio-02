import { Button } from './Button';
import { GenreResponseProps } from '../interface/index';

import '../styles/sidebar.scss';

interface ISideBarProps {
  genres: GenreResponseProps[];
  handleClickButton: Function;
  selectedGenreId: number;
}

export function SideBar(props: ISideBarProps) {
  const { genres, handleClickButton, selectedGenreId } = props;

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
