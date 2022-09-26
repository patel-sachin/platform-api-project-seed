import { html, render } from "https://unpkg.com/lit-html@1.0.0/lit-html.js";

class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.render = this.render.bind(this);
        this.render();
    }

    render = async () => {
        const template = html`
            <div class="header-bar">
                <div
                    class="btn-group"
                    role="group"
                    aria-label="Button group with nested dropdown"
                >
                    <button type="button" class="btn btn-primary">1</button>
                    <button type="button" class="btn btn-primary">2</button>

                    <div class="btn-group" role="group">
                        <button
                            type="button"
                            class="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Dropdown
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">
                                    Dropdown link-1
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Dropdown link-2
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Dropdown link-2
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Dropdown link-3
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Dropdown link-4
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Dropdown link-5
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        return render(template, this);
    };
}

customElements.define("header-bar", HeaderBar);
