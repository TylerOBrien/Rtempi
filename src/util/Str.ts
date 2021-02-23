/**
 * Functions
*/

/**
 * Assumes the passed word param is a single word and converts it to a singular
 * form if it is not already singular.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
function singular(word:string):string {
  const end = ( word.length - 1 );

  if (end > 1 && word[end] === 's') {
    if (end > 2 && word.slice(-3) === 'ies') {
      word = word.slice(0, end-2) + 'y';
    } else {
      word = word.slice(0, end);
    }
  }

  return word;
}

/**
 * Assumes the passed word param is a single word and converts it to a plural
 * form if it is not already plural.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
function plural(word:string):string {
  const end = ( word.length - 1 );

  if (end > 0 && word[end] !== 's') {
    if (word[end] === 'y') {
      word = ( word.slice(0, end) + 'ies' );
    } else {
      word = ( word + 's' );
    }
  }

  return word;
}

/**
 * Returns the word param with the first letter in lowercase.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
function lcfirst(word:string):string {
  return word && ( word[0].toLowerCase() + word.slice(1) );
}

/**
 * Returns the word param with the first letter in uppercase.
 * 
 * @param {string} word
 * 
 * @return {string}
 */
function ucfirst(word:string):string {
  return word && ( word[0].toUpperCase() + word.slice(1) );
}

/**
 * Check if the string matches the given pattern via a regex test operation. An
 * asterisk can be used as a wildcard.
 * 
 * @param {string} source
 * @param {string | Array<string>} pattern
 * 
 * @return {boolean}
 */
function matches(source:string, pattern:string | Array<string>) : boolean {
  if (!pattern.length) {
    return !source.length;
  } else if (typeof pattern === 'string') {
    pattern = [ pattern ];
  }

  for (const item of pattern) {
    if (item === source) {
      continue;
    }

    const expr = new RegExp('^' + item.replace(/\*/g, '.*') + '$');

    if (!expr.test(source)) {
      return false;
    }
  }

  return true;
}

/**
 * Checks if the given needle exists within the string.
 * 
 * @param {string} string
 * @param {string | Array<string>} needle
 * 
 * @return {boolean}
 */
function contains(haystack:string, needle:string | Array<string>) : boolean {
  if (typeof needle === 'string') {
    return haystack.indexOf(needle) !== -1;
  }

  for (const item of needle) {
    if (haystack.indexOf(item) === -1) {
      return false;
    }
  }

  return true;
}

/**
 * 
 * 
 * @param {string} source
 * @param {number} maxLength
 * @param {string} ending
 * 
 * @return {source}
 */
function limit(source:string, maxLength:number = 100, ending:string = '…') : string {
  return source.length > maxLength
    ? source.substr(0, maxLength) + ending
    : source;
}


/**
 * Encode an array using base64.
 * 
 * @param {Int8Array | Uint8Array | Array<string>} unencoded
 * 
 * @return {string}
 */
function base64(unencoded:Int8Array | Uint8Array | Array<string>) : string {
  const parts:Array<string> = unencoded.join().split(',');
  const end:number = parts.length;

  for (let i = 0; i < end; i++) {
    parts[i] = String.fromCharCode(parseInt(parts[i]));
  }

  return btoa(parts.join(''));
}

/**
 * Generate a string of random alphanumeric characters.
 * 
 * @param {number} length
 * 
 * @return {string}
 */
function random(length:number = 16) : string {
  let noise = '';

  while (noise.length < length) {
    const remaining = ( length - noise.length );
    const bytes = window.crypto.getRandomValues(new Uint8Array(remaining));
    const encoded = base64(bytes);

    noise = ( noise + encoded.replace(/[/+=]+/g, '').substr(0, remaining) );
  }

  return noise;
}

/**
 * Exports
*/

export const Str = { singular, plural, lcfirst, ucfirst, matches, contains, limit, base64, random };
