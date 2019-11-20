module.exports = {
    url: 'http://localhost:3000',
    elements: {
        // Page
        'page': ('.home-text'),

        // Buttons
        'start': ('.home-btn'),
        'next': ('[name="nextButton"]'),
        'redo': ('[name="restartButton"]'),
        'send': ('[name="sendButton"]'),
        'prime': ('[value="Primary Home"]'),
        'rent': ('[value="Rental Property"]'),
        'second': ('[value="Secondary Home"]'),
        'yes': ('[name="yesButton"]'),
        'no': ('[name="noButton"]'),
        'excel': ('[value="excellent"]'),
        'good': ('[value="good"]'),
        'fair': ('[value="fair"]'),
        'poor': ('[value="poor"]'),
        'never': ('[value="Has never been in bankruptcy"]'),
        'bank': ('[value="Has had bankruptcy before"]'),
        'fore': ('[value="Has had a foreclosure before"]'),
        'both': ('[value="Has had both a foreclosure and a bankruptcy"]'),
        
        // Fields
        'city': ('[name="city"]'),
        'price': ('[name="price"]'),
        'down': ('[name="down"]'),
        'street': ('#addressOne'),
        'street2': ('#addressTwo'),
        'zip': ('#addressThree'),
        'first': ('#first'),
        'last': ('#last'),
        'email': ('#email'),

        // Verification
        'nameForm': ('.name'),
    }
}