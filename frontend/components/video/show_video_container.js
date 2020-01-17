import { connect } from 'react-redux';
import ShowVideo from './show_video';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => {
    // const videos = Object.values(state.entities.videos)
    return (
        {
            video: state.entities.videos[ownProps.match.params.id],
            // videos: videos
        }
    )
}


const mapDispatchToProps = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    // fetchVideos: () => dispatch((fetchVideos()))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowVideo))