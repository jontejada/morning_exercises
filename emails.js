function emails(f,l,d) {
	return [
		f[0]+'.'+l+'@'+d,
		f+'.'+l+'@'+d,
		l+'.'+f+'@'+d,
		f[0]+l+'@'+d
		];
}

console.log(emails('jon','tejada','jontejada.com'));