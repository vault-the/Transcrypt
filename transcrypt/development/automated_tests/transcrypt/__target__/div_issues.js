// Transcrypt'ed from Python, 2018-04-05 23:13:14
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, complex, __conj__, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
var re = {};
var __name__ = 'div_issues';
import {f1, p, q, r, aB, anA, y} from './div_issues.issue55.js';
export {f1, p, q, r, aB, anA, y};
import {run387} from './div_issues.issue387.js';
export {run387};
import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
export var run = function (autoTester) {
	autoTester.check ('Issue 24');
	var py_switch = false;
	autoTester.check (py_switch);
	autoTester.check ('Issue 27');
	autoTester.check (list (['zero', 'one', 'two', 'three', 'four']).index ('three'));
	autoTester.check ('Issue 36');
	var results = list ([]);
	for (var i = 0; i < 10; i++) {
		results.append ((function __lambda__ (j) {
			return (function __lambda__ () {
				return j;
			});
		}) (i));
	}
	autoTester.check ((function () {
		var __accu0__ = [];
		for (var result of results) {
			__accu0__.append (result ());
		}
		return __accu0__;
	}) ());
	autoTester.check ('Issue 37');
	autoTester.check (Math.floor (15 / 7));
	autoTester.check ('Issue 40');
	autoTester.check (65 / (5 * 2));
	autoTester.check ('Issue 50');
	autoTester.check ((Math.floor (((240 + 30) - 1) / 30)) * 30);
	autoTester.check ('Issue 51');
	var a = 1;
	var b = 1;
	autoTester.check (a, b, new set ([a, b]) == new set ([1, 2]));
	autoTester.check ('Issue 52');
	var __left0__ = tuple (['switch', 'case', 'default']);
	var py_switch = __left0__ [0];
	var py_case = __left0__ [1];
	var py_default = __left0__ [2];
	autoTester.check (py_switch, py_case, py_default);
	autoTester.check ('Issue 54');
	var aDict = dict ({1: 11, 2: 22, 3: 33});
	autoTester.check (aDict);
	aDict.py_clear ();
	autoTester.check (aDict);
	autoTester.check ('Issue 60');
	var three = 3;
	var one = three & 1;
	var seven = three | 4;
	var eight = one << 3;
	var four = eight >> 1;
	var aTrue = bool (three & one);
	var aFalse = bool (three & four);
	autoTester.check (3, three, 1, one, 7, seven, 8, eight, 4, four, true, aTrue, false, aFalse);
	autoTester.check ('Issue 65');
	var aList = list ([4, 5, 6]);
	__call__ (autoTester.check, autoTester, __add__ (__add__ (list ([1, 2, 3]), aList), list ([4, 5, 6])));
	__call__ (autoTester.check, autoTester, __mul__ (3, list ([1, 2, 3])));
	__call__ (autoTester.check, autoTester, __mul__ (list ([1, 2, 3]), 3));
	var aString = 'Crocodile';
	__call__ (autoTester.check, autoTester, __add__ (__add__ ('Tiger', aString), 'Elephant'));
	__call__ (autoTester.check, autoTester, __mul__ (3, aString));
	__call__ (autoTester.check, autoTester, __mul__ (aString, 3));
	autoTester.check ('Issue 76');
	var initially17 = 17;
	autoTester.check (initially17);
	var initially17 = Math.floor (initially17 / 2);
	autoTester.check (initially17);
	var initially17 = Math.floor (initially17 / 2);
	autoTester.check (initially17);
	autoTester.check ('Issue 112');
	try {
		if (__envir__.executor_name == __envir__.transpiler_name) {
			var x = new Int8Array (2);
		}
		else {
			var x = list ([null, null]);
		}
		x [0] = 3;
		x [1] = 2;
		for (var i of x) {
			autoTester.check (i);
		}
		var y = 3;
		for (var j of y) {
			autoTester.check (j);
		}
	}
	catch (__except0__) {
		// pass;
	}
	autoTester.check ('Issue 122');
	var chunks = function* (aList, chunkLength) {
		for (var index of range (0, len (aList), chunkLength)) {
			yield aList.__getslice__ (index, index + chunkLength, 1);
		}
	};
	for (var chunk of chunks ((function () {
		var __accu0__ = [];
		for (var index = 0; index < 26; index++) {
			__accu0__.append (chr (index + 97));
		}
		return __accu0__;
	}) (), 10)) {
		autoTester.check (chunk);
	}
	autoTester.check ('Issue 123');
	autoTester.check (__mod__ (10, 3), __mod__ (10, -(3)), __mod__ (-(10), 3), __mod__ (-(10), -(3)), __mod__ (10, 10), __mod__ (10, -(10)), __mod__ (-(10), 10), __mod__ (-(10), -(10)));
	autoTester.check ('Issue 125');
	var abc = 'abc';
	for (var index of abc) {
		autoTester.check (abc);
	}
	autoTester.check ('Issue 127');
	autoTester.check (dict ({'include_docs': 'true', 'keys': list (['key1', 'key2']), 'limit': 50}));
	autoTester.check ('Issue 134');
	var __left0__ = tuple ([5, 12, -(5), -(5), 0, 0]);
	var x0 = __left0__ [0];
	var x1 = __left0__ [1];
	var x2 = __left0__ [2];
	var x3 = __left0__ [3];
	var x4 = __left0__ [4];
	var x5 = __left0__ [5];
	var x0 = __mod__ (x0, 10);
	var x1 = __mod__ (x1, 5);
	var x2 = __mod__ (x2, 2);
	var x3 = __mod__ (x3, -(3));
	var x4 = __mod__ (x4, 1);
	var x5 = __mod__ (x5, -(1000));
	autoTester.check (x0, x1, x2, x3, x4);
	autoTester.check ('Issue 136');
	var aDict = dict ({'a': 'ape', 'b': 'banana'});
	autoTester.check (aDict.py_get ('a', 'noApe'), aDict.py_get ('b'), aDict.py_get ('c', 'noCarot'), aDict.py_get ('d'));
	autoTester.check ('Issue 144');
	var aList = (function () {
		var __accu0__ = [];
		var __iterable0__ = list ([1, 2, 3]);
		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
			var x = __getitem__ (__iterable0__, __index0__);
			__call__ (__accu0__.append, __accu0__, x);
		}
		return __accu0__;
	}) ();
	__call__ (autoTester.check, autoTester, aList);
	autoTester.check ('<br><br>Issue 145<br>');
	var SortTest = __class__ ('SortTest', [object], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self) {
			self.alphabet = 'abcdefghijklmnopqrstuvwxyz';
			self.nChars = 10;
			self.nCols = 10;
			self.nRows = 30;
			self.pseudoRandom = 0;
			var randomWord = function () {
				var word = '';
				for (var iChar = 0; iChar < self.nChars; iChar++) {
					self.pseudoRandom = __mod__ (81212 * self.pseudoRandom + 28411, 134456);
					word += self.alphabet [__mod__ (self.pseudoRandom, 26)];
				}
				return word;
			};
			self.rows = (function () {
				var __accu0__ = [];
				for (var iRow = 0; iRow < self.nRows; iRow++) {
					__accu0__.append ((function () {
						var __accu1__ = [];
						for (var iCol = 0; iCol < self.nCols; iCol++) {
							__accu1__.append (randomWord ());
						}
						return __accu1__;
					}) ());
				}
				return __accu0__;
			}) ();
		});},
		get py_sort () {return __get__ (this, function (self) {
			for (var iCol of py_reversed (range (self.nCols))) {
				self.rows.py_sort (__kwargtrans__ ({key: (function __lambda__ (row) {
					return row [iCol];
				})}));
			}
		});}
	});
	var sortTest = SortTest ();
	autoTester.check ('<br>Unsorted:<br>');
	for (var row of sortTest.rows) {
		autoTester.check ('{}<br>'.format (','.join ((function () {
			var __accu0__ = [];
			for (var word of row) {
				__accu0__.append (word);
			}
			return __accu0__;
		}) ())));
	}
	sortTest.py_sort ();
	autoTester.check ('<br>Sorted:<br>');
	for (var row of sortTest.rows) {
		autoTester.check ('{}<br>'.format (','.join ((function () {
			var __accu0__ = [];
			for (var word of row) {
				__accu0__.append (word);
			}
			return __accu0__;
		}) ())));
	}
	autoTester.check ('<br><br>Issue 148<br>');
	var aDict = dict ({'items': list ([4, 5, 6])});
	for (var [aKey, aValue] of aDict.py_items ()) {
		autoTester.check ('{}: {}'.format (aKey, aValue));
	}
	autoTester.check ('<br><br>Issue 169<br>');
	autoTester.check (int (1 / float ('inf')), int (1 / float ('-inf')));
	autoTester.check ('<br><br>Issue 178<br>');
	var bitmaps = list ([tuple ([2, '']), tuple ([4, '']), tuple ([8, 'i']), tuple ([16, 'm']), tuple ([32, 'y']), tuple ([64, 'u']), tuple ([128, 'g'])]);
	for (var flags of tuple ([122, 233, 11, 55, 79, 201, 23, 111, 200, 100, 50, 25, 12, 6])) {
		autoTester.check (''.join ((function () {
			var __accu0__ = [];
			for (var x of bitmaps) {
				if ((x [0] & flags) > 0) {
					__accu0__.append (x [1]);
				}
			}
			return __accu0__;
		}) ()));
	}
	var issue256 = function () {
		autoTester.check ('Issue 256');
		var C = __class__ ('C', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, value) {
				self.value = value;
			});}
		});
		var f1 = function (value) {
			return (C (value).value || 'second').capitalize () == 'First';
		};
		var f2 = function (value) {
			return (C (value).value || 'second').capitalize () == 'Second';
		};
		var f3 = function (value) {
			return C (value).value || 'second';
		};
		var f4 = function (value) {
			return C (value).value || 'second';
		};
		autoTester.check (f1 ('first'));
		autoTester.check (f1 (''));
		autoTester.check (f2 ('first'));
		autoTester.check (f2 (''));
		autoTester.check (f3 ('first'));
		autoTester.check (f4 (''));
	};
	issue256 ();
	autoTester.check ('Issue 274');
	var a = 3;
	autoTester.check ('Still alive');
	autoTester.check ('Issue 276');
	var a = 2;
	var b = Math.pow (a, 3);
	var a = Math.pow (a, 4);
	autoTester.check (a, b);
	autoTester.check ('Issue 277');
	var py_new = 3;
	autoTester.check (py_new);
	autoTester.check ('Issue 279');
	var A = __class__ ('A', [object], {
		__module__: __name__,
		py_TypeError: 111,
		TypeError: 222
	});
	autoTester.check (A.py_TypeError, A.TypeError);
	autoTester.check ('Still alive');
	autoTester.check ('Issue 301');
	var filter_word = function (word0, word1) {
		if (len (word0) != len (word1)) {
			return false;
		}
		for (var [char0, char1] of zip (word0, word1)) {
			if (char0 != '_' && char0 != char1) {
				return false;
			}
		}
		return true;
	};
	autoTester.check (filter_word ('bee', 'beer'));
	autoTester.check (filter_word ('wine', 'wine'));
	autoTester.check (filter_word ('win_', 'wind'));
	autoTester.check (filter_word ('_in_', 'kind'));
	autoTester.check (filter_word ('min_', 'kind'));
	autoTester.check ('Issue 306');
	var dict_306 = dict ({'Abraham': 'Lincoln', 'Barack': "O'Bama", 'Thomas': 'Jefferson'});
	var results = list ([]);
	try {
		while (true) {
			results.append (dict_306.py_popitem ());
		}
	}
	catch (__except0__) {
		if (isinstance (__except0__, Exception)) {
			var exception = __except0__;
			autoTester.check (sorted (results));
			autoTester.check ("That's it");
		}
		else {
			throw __except0__;
		}
	}
	autoTester.check ('Issue 314');
	try {
		autoTester.check (int (float (123)));
	}
	catch (__except0__) {
		autoTester.check ('a');
	}
	try {
		autoTester.check (float (12.3));
	}
	catch (__except0__) {
		autoTester.check ('b');
	}
	try {
		autoTester.check (int (float ('123')));
	}
	catch (__except0__) {
		autoTester.check ('c');
	}
	try {
		autoTester.check (int (float (' 123')));
	}
	catch (__except0__) {
		autoTester.check ('d');
	}
	try {
		autoTester.check (float (''));
	}
	catch (__except0__) {
		autoTester.check ('e');
	}
	try {
		autoTester.check (float (' '));
	}
	catch (__except0__) {
		autoTester.check ('f');
	}
	try {
		autoTester.check (float ('drie'));
	}
	catch (__except0__) {
		autoTester.check ('g');
	}
	autoTester.check ('Issue 316');
	autoTester.check (list (filter (null, list ([list ([1, 2]), list ([3]), list ([]), list ([4, 5]), list ([6])]))));
	autoTester.check (list (filter ((function __lambda__ (l) {
		return len (l) >= 2;
	}), list ([list ([1, 2]), list ([3]), list ([]), list ([4, 5]), list ([6])]))));
	autoTester.check ('Issue 317');
	var mylist = list ([]);
	try {
		mylist.remove ('value');
	}
	catch (__except0__) {
		if (isinstance (__except0__, ValueError)) {
			var exception = __except0__;
			autoTester.check (exception.__class__.__name__);
		}
		else {
			throw __except0__;
		}
	}
	autoTester.check ('Issue 331');
	autoTester.check (max (-(5), 4, 1, 2, -(3), 2));
	autoTester.check (max (list ([-(5), 4, 1, 2, -(3), 2])));
	autoTester.check (max (tuple ([5, 6, 2, -(2), -(4)])));
	autoTester.check (min (-(5), 4, 1, 2, -(3), 2));
	autoTester.check (min (list ([-(5), 4, 1, 2, -(3), 2])));
	autoTester.check (min (tuple ([5, 6, 2, -(2), -(4)])));
	autoTester.check ('issue 356');
	try {
		var __except0__ = py_TypeError ('How are you?');
		__except0__.__cause__ = null;
		throw __except0__;
	}
	catch (__except0__) {
		if (isinstance (__except0__, py_TypeError)) {
			var exception = __except0__;
			autoTester.check (exception);
		}
		else {
			throw __except0__;
		}
	}
	autoTester.check ('Issue 369');
	var Vector = __class__ ('Vector', [object], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self) {
			var py_values = tuple ([].slice.apply (arguments).slice (1));
			self.py_values = py_values;
		});},
		get __iter__ () {return __get__ (this, function* (self) {
			for (var item of self.py_values) {
				yield item;
			}
		});},
		[Symbol.iterator] () {return this.__iter__ ()},
		get __add__ () {return __get__ (this, function (self, other) {
			return Vector (...(function () {
				var __accu0__ = [];
				for (var [x, y] of zip (self, other)) {
					__accu0__.append (x + y);
				}
				return py_iter (__accu0__);
			}) ());
		});},
		get __str__ () {return __get__ (this, function (self) {
			return str (list (self.py_values));
		});}
	});
	__call__ (autoTester.check, autoTester, __call__ (str, null, __add__ (__call__ (Vector, null, 1, 2, 3), __call__ (Vector, null, 3, 4, 5))));
	autoTester.check ('Issue 387');
	run387 (autoTester);
	autoTester.check ('Issue 391');
	autoTester.check (int (false));
	autoTester.check (int (true));
	autoTester.check (int (1 == 2));
	autoTester.check (int (1 != 2));
	autoTester.check ('Issue 392');
	var Example = __class__ ('Example', [object], {
		__module__: __name__,
		d: dict ({'A': 1, 'B': 2}),
		rec: re.compile ('(?P<decimal>\\d+)', re.ASCII),
		get run () {return __get__ (this, function (self) {
			var match = self.rec.match ('42');
			if (!(match)) {
				print ('ERROR: RE does not match');
			}
			var e = match.groupdict ();
			autoTester.check ('before: self.d=', self.d);
			autoTester.check ('before: e=', e);
			self.d.py_update (e);
			autoTester.check ('after: self.d=', self.d);
		});}
	});
	var example = Example ();
	example.run ();
	autoTester.check ('Issue 398');
	var Test398 = __class__ ('Test398', [object], {
		__module__: __name__,
	});
	var test398 = Test398 ();
	autoTester.check ('Issue 399');
	try {
		var surpressWarning = __k__ (dict ({'a': 5}), 'a');
		var surpressWarning = __k__ (dict ({'a': 5}), 'b');
		autoTester.check ('no problem');
	}
	catch (__except0__) {
		if (isinstance (__except0__, KeyError)) {
			autoTester.check ('not found');
		}
		else {
			throw __except0__;
		}
	}
	autoTester.check ('Issue 413');
	var Foo = __class__ ('Foo', [object], {
		__module__: __name__,
		get __len__ () {return __get__ (this, function (self) {
			return 3;
		});},
		get __getitem__ () {return __get__ (this, function (self, i) {
			if (i >= 3) {
				var __except0__ = IndexError;
				__except0__.__cause__ = null;
				throw __except0__;
			}
			return 'This is item ' + str (i);
		});}
	});
	var foo = Foo ();
	__call__ (autoTester.check, autoTester, 'Attempt 1:');
	var __iterable0__ = foo;
	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
		var i = __getitem__ (__iterable0__, __index0__);
		__call__ (autoTester.check, autoTester, i);
	}
	__call__ (autoTester.check, autoTester, 'Attempt 2:');
	for (var i = 0; i < __call__ (len, null, foo); i++) {
		__call__ (autoTester.check, autoTester, __getitem__ (foo, i));
	}
	autoTester.check ('Issue 414');
	var Foo = __class__ ('Foo', [object], {
		__module__: __name__,
	});
	var foo = Foo ();
	foo.bar = 'baz';
	foo.py_name = 'hello';
	foo.py_default = 'world';
	autoTester.check ((function () {
		var __accu0__ = [];
		for (var x of dir (foo)) {
			if (!(x.startswith ('__'))) {
				__accu0__.append (x);
			}
		}
		return __accu0__;
	}) ());
	var foo = function () {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		var py_default = kwargs.py_get ('default', 'bar');
		return py_default;
	};
	autoTester.check (foo ());
	autoTester.check (foo (__kwargtrans__ ({py_default: 'Hello World'})));
	autoTester.check ('Issue 460');
	var s460 = 'car';
	var l460 = list ([11, 22, 33]);
	var t460 = tuple ([4, 5, 6]);
	var d460 = dict ([[-(1), 'mmminusOne'], ['b', 'bbbike']]);
	__setitem__ (l460, 0, 1);
	__setitem__ (l460, __neg__ (2), 2);
	__setitem__ (l460, __neg__ (1), 3);
	__setitem__ (d460, __neg__ (1), 'minusOne');
	__setitem__ (d460, 'b', 'bike');
	__call__ (autoTester.check, autoTester, __getitem__ (s460, 0), __getitem__ (s460, 1), __getitem__ (s460, 2), __getitem__ (s460, __neg__ (1)), __getitem__ (s460, __neg__ (2)), __getitem__ (s460, __neg__ (3)));
	__call__ (autoTester.check, autoTester, __getitem__ (l460, 0), __getitem__ (l460, 1), __getitem__ (l460, 2), __getitem__ (l460, __neg__ (1)), __getitem__ (l460, __neg__ (2)), __getitem__ (l460, __neg__ (3)));
	__call__ (autoTester.check, autoTester, __getitem__ (t460, 0), __getitem__ (t460, 1), __getitem__ (t460, 2), __getitem__ (t460, __neg__ (1)), __getitem__ (t460, __neg__ (2)), __getitem__ (t460, __neg__ (3)));
	__call__ (autoTester.check, autoTester, __getitem__ (d460, __neg__ (1)), __getitem__ (d460, 'b'));
	__call__ (autoTester.check, autoTester, __getitem__ (s460, 0), __getitem__ (s460, 1), __getitem__ (s460, 2), __getitem__ (s460, __neg__ (1)), __getitem__ (s460, __neg__ (2)), __getitem__ (s460, __neg__ (3)));
	__call__ (autoTester.check, autoTester, __getitem__ (l460, 0), __getitem__ (l460, 1), __getitem__ (l460, 2), __getitem__ (l460, __neg__ (1)), __getitem__ (l460, __neg__ (2)), __getitem__ (l460, __neg__ (3)));
	__call__ (autoTester.check, autoTester, __getitem__ (t460, 0), __getitem__ (t460, 1), __getitem__ (t460, 2), __getitem__ (t460, __neg__ (1)), __getitem__ (t460, __neg__ (2)), __getitem__ (t460, __neg__ (3)));
	__call__ (autoTester.check, autoTester, __getitem__ (d460, __neg__ (1)), __getitem__ (d460, 'b'));
	try {
		autoTester.check (__k__ (d460, -(1)), __k__ (d460, 'c'));
	}
	catch (__except0__) {
		autoTester.check (111);
	}
	try {
		autoTester.check (__k__ (d460, -(2)), __k__ (d460, 'b'));
	}
	catch (__except0__) {
		autoTester.check (222);
	}
	var a = list ([1, 2, 3]);
	var b = list ([4, 5, 6]);
	var c = '1,2,34,5,6';
	if (__envir__.executor_name == __envir__.transpiler_name) {
		autoTester.check (a + b);
		__call__ (autoTester.check, autoTester, __add__ (a, b));
		autoTester.check (a + b);
	}
	else {
		autoTester.check (c);
		__call__ (autoTester.check, autoTester, __add__ (a, b));
		autoTester.check (c);
	}
	if (__eq__ (__envir__.executor_name, __envir__.transpiler_name)) {
		autoTester.check (a + b);
		__call__ (autoTester.check, autoTester, __add__ (a, b));
		autoTester.check (a + b);
	}
	else {
		autoTester.check (c);
		__call__ (autoTester.check, autoTester, __add__ (a, b));
		autoTester.check (c);
	}
};

//# sourceMappingURL=div_issues.map