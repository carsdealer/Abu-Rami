import { LitElement, html, css } from 'lit';

class ImageSlider extends LitElement {
    static styles = css`
        .slider {
            position: relative;
            width: 100%;
            max-width: 600px;
            height: 300px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .slides {
            display: flex;
            width: 300%;
            transition: transform 0.5s ease-in-out;
        }
        .slide {
            min-width: 100%;
        }
        .slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .buttons {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
        }
        .btn {
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
    `;

    static properties = {
        index: { type: Number }
    };

    constructor() {
        super();
        this.index = 0;
        this.images = ['./aaa.jpg', './asa.jpg', './dsa.jpg']; // Replace with actual image paths
    }

    nextSlide() {
        this.index = (this.index + 1) % this.images.length;
    }

    prevSlide() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
    }

    render() {
        return html`
            <div class="slider">
                <div class="slides" style="transform: translateX(-${this.index * 100}%);">
                    ${this.images.map(img => html`<div class="slide"><img src="${img}" alt="Slide Image"></div>`)}
                </div>
                <div class="buttons">
                    <button class="btn" @click="${this.prevSlide}">❮</button>
                    <button class="btn" @click="${this.nextSlide}">❯</button>
                </div>
            </div>
        `;
    }
}

customElements.define('image-slider', ImageSlider);
