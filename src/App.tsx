import 'todomvc-app-css/index.css'
import {TodoList} from "./components/TodoList";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {configureReduxDevTools, initReduxDevTools, observer} from "proxily";
configureReduxDevTools();
initReduxDevTools();
function App() {
    return (
        <div>
            <Header/>
            <section className="main">
                <TodoList/>
            </section>
	        <Footer/>
        </div>
    );
}

export default observer(App);
