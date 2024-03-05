let subject = prompt("신청할 과목을 선택하세요 1. ES6 2.React 3. Linux ");

if(subject != null) {

		switch(subject) {
			case "1" :
				document.write("ES6를 신청했습니다.");
				break;
			case "2" :
				document.write("React를 신청했습니다.");
				break;
				case "3" :
					document.write("Linux를 신청했습니다.");
					break;
					default:
						document.write("잘못 입력하셨습니다. 다시 입력해 주세요.");
		}


}

// if(subject !== null) {

// 	if(subject == "1") {
// 	document.write("ES6를 신청했습니다.");
// 	}	else if(subject == "2") {
// 		document.write("React를 신청했습니다.");
// 	} else if(subject == "3") {
// 		document.write("Linux를 신청했습니다.");
// 	} else if(subject != 1,  subject != 2, subject != 3) {
// 		document.write("잘못 입력하셨습니다. 다시 입력해 주세요.");
// 	}

//  } 
	
 

