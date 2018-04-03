let Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+')
        );
    },

    componentWillMount: function() {
    console.log('Przed utworzeniem komponentu');
    },

    componentDidMount: function() {
    console.log('Po utworzeniu komponentu');
    },

    componentWillUpdate: function(nextProps, nextState) {
    console.log('Aktualny stan licznika: ' + nextState.counter);
    },

    componentDidUpdate: function(prevProps, prevState) {
    console.log('Poprzednia stan licznika: ' + prevState.counter);
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));
