var pubkey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: SKS 1.1.5
Comment: Hostname: pgp.mit.edu

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
=dxDi
-----END PGP PUBLIC KEY BLOCK-----
`;

var res = document.getElementById('res');
var box = document.getElementById('box');

document.getElementById('check').onclick = function() {
    var options;
    try {
        options = {
            message: openpgp.cleartext.readArmored(box.value),
            publicKeys: openpgp.key.readArmored(pubkey).keys
        };
    } catch(error) {
        res.value = Date().substring(4, 24) + ': ' + error + '\n' + res.value;
        return;
    };

    openpgp.verify(options).then(function(verified) {
        var is_valid = verified.signatures[0].valid;
        var message;
        if (is_valid) {
             message = 'Signature VERIFIED (key ID ' + verified.signatures[0].keyid.toHex() + ')';
        } else {
            message = 'Signature INVALID.';
        }
        res.value = Date().substring(4, 24) + ': ' + message + '\n' + res.value;

    });
};

document.getElementById('clear').onclick = function() {
    box.value = '';
    res.value = '';
};
