const createElement = (tagName, properties = {}) => Object.assign(document.createElement(tagName), properties);
const Input = properties => createElement('input', properties);
const Span = properties => createElement('span', properties);
const NumberInput = properties => Input({
  ...properties,
  onpaste: ev => {
    const numbers = (ev.clipboardData || ev.clipboardData).getData('text').replace(/[^0-9]/g, '');
    const {selectionStart: start, value} = ev.target;    
    ev.target.value = value.slice(0, start) + numbers + value.slice(start);
    ev.target.selectionStart = start + numbers.length;
    ev.preventDefault();
  },
  onkeypress: ev => {'1234567890'.indexOf(ev.key) === -1 && ev.preventDefault();},
});
class ConditionalInput {
  static create(parent) {return new this(parent);}
  notify = Span({innerText: '숫자는 5자 이상 입력해주세요.', style: 'color: red;'});
  root = NumberInput({onblur: ev => {
    if (ev.target.value.length > 5) return this.notify.parentNode && this.notify.parentNode.removeChild(this.notify);
    ev.target.parentElement.appendChild(this.notify);
  }});
  constructor(parent) {
    parent.appendChild(this.root);
  }
}
ConditionalInput.create(document.body);