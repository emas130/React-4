let Counter1 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    getDefaultProps: function() {
        console.log('Ustawia domyslne wartosci dla propsow nie przekazanych do elementu.');
    },

    componentWillMount: function() {
        console.log('Metoda wywolywana przed wyrenderowaniem elementu.');
    },

    componentDidMount: function() {
        console.log('Metoda wywolywana po wyrenderowaniu elementu.');
    },

    componentWillReceiveProps: function () {
        console.log('Metoda wywolywana po otrzymaniu nowych propsow. Mozna zaktualozowac stan na podstawie nowych propsow.');
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('Sprawdza czy konieczne jest przerenderowannie elementu.');
        if (this.state.counter !== nextState.counter) {
            return true;
          } else {
          return false;
        }
    },

    componentWillUpdate: function () {
        console.log('Metoda jest wywolywana przed samym przerenderowaniem elementu i pozwala na przygotowanie go do tego.');
    },

    componentDidUpdate: function () {
        console.log('Metoda wywolywana po ponownym przerenderowaniu elementu.');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState ({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, 'Dodaj 1'),
                React.createElement('button', {onClick: this.decrement}, 'Odejmij 1'),
                React.createElement('span', {}, 'Licznik 1: ' + this.state.counter)
        );
    },

    componentWillUnmount: function () {
        console.log('Metoda wywolywana zaraz przed usunieciem elementu.')
    }
}),

Counter2 = React.createClass({
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
        this.setState ({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, 'Dodaj 1'),
                React.createElement('button', {onClick: this.decrement}, 'Odejmij 1'),
                React.createElement('span', {}, 'Licznik 2: ' + this.state.counter)
    );
    }
}),

Counter3 = React.createClass({
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
        this.setState ({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, 'Dodaj 1'),
                React.createElement('button', {onClick: this.decrement}, 'Odejmij 1'),
                React.createElement('span', {}, 'Licznik 3: ' + this.state.counter)
    );
    }
});
let app = React.createElement('div', {}, React.createElement(Counter1), React.createElement(Counter2), React.createElement(Counter3));
ReactDOM.render(app, document.getElementById('app'));