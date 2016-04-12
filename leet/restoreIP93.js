/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
	var out = [];
	var s1,s2,s3,s4;
	for (var ip1 = 1; ip1 < 4; ip1++) {
		for (var ip2 = 1; ip2 < 4; ip2++) {
			for (var ip3 = 1; ip3 < 4; ip3++) {
				for (var ip4 = 1; ip4 < 4; ip4++) {
					s1 = s.substr(0,ip1);
					s2 = s.substr(ip1,ip2);
					s3 = s.substr((ip1 + ip2),ip3);
					s4 = s.substr((ip1 + ip2 + ip3),ip4);
					fullIP = Number(s1).toString() + '.' + Number(s2).toString() + '.' + Number(s3).toString() + '.' + Number(s4).toString(); 
					// console.log(fullIP);
					if ((ip1 + ip2 + ip3 + ip4) === s.length && (fullIP.length - 3) === s.length && Number(s1) < 256 && Number(s2) < 256 && Number(s3) < 256 && Number(s4) < 256) {
						// console.log(ip1,ip2,ip3,ip4);
						// console.log(s4);
						out.push(fullIP);
					}
				}
			}
		}
	}
	return out;
};

// console.log(restoreIpAddresses("0000"));
// console.log(restoreIpAddresses("0123"));
// console.log(restoreIpAddresses("010010"));
// ["0.10.0.10","0.100.1.0"]
// 0123
// 1111
// 01234
// 12111
// 0123456

// 0123456
