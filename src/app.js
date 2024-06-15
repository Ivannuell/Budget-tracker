import { incomeContainer, expenseContainer, functionContainer } from "./components/container"

export default function App() {
    const App = document.createElement('div')
    App.setAttribute('id', 'app')

    const main_container = document.createElement('div')
    main_container.setAttribute('id', 'mainContainer')

    const title = titleElement();
    const e_container = expenseContainer();
    const i_container = incomeContainer();
    const f_container = functionContainer(i_container, e_container);

    main_container.appendChild(e_container);
    main_container.appendChild(i_container);
    main_container.appendChild(f_container);

    App.appendChild(title)
    App.appendChild(main_container)


    return App;
}

function titleElement() {
    const title = document.createElement('h1')
    title.setAttribute('id', 'title');
    title.innerText = 'FINANCE TRACKER';

    return title;
}

