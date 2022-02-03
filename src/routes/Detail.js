import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history} = this.props;
        if (location.state ===undefined) {
            history.push('/'); /*location.state가 없는 경우 Home으로 이동! 이렇게 리다이렉션!*/
        }
    }

    render() {
        const { location } = this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        }
        else{
            return null;
        }
        
    }
}

export default Detail;