import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail' 
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    imageSrc={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    text="Nice blog post"
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                imageSrc={faker.image.avatar()} 
                author="Alex" 
                timeAgo="Today at 2:00PM" 
                text="Need more details"
            />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));