div {
    margin: 20px;
    width: 100px;
    height: 100px;
    background: #f00;

    /* The animation part: */
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}