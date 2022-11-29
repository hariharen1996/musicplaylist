import {Component} from 'react'
import {MdDelete} from 'react-icons/md'
import './index.css'

class MusicPlayList extends Component {
  render() {
    const {item, deletedData} = this.props
    const {imageUrl, id, name, genre, duration} = item

    const deletePlaylist = () => {
      deletedData(id)
    }
    return (
      <li className="music-lists">
        <div className="playlist-container">
          <div className="music-play">
            <img src={imageUrl} alt="track" className="img" />
            <div className="playlist-content">
              <p className="name">{name}</p>
              <p className="genre">{genre}</p>
            </div>
          </div>
          <div className="playlist-components">
            <p className="duration">{duration}</p>
            <button
              type="button"
              className="delete-btn"
              onClick={deletePlaylist}
              // eslint-disable-next-line react/no-unknown-property
              testid="delete"
            >
              <MdDelete size={25} className="delete-icon" />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default MusicPlayList
