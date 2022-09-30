//
//  TestRx.swift
//  Test
//
//  Created by Leonardo Bonetti on 2022-09-21.
//

import RxSwift

import Foundation

@objc(Test)
public class TestRx: NSObject {
  
  @objc(test)
  static func test() {
    _ = Observable<Int>.interval(.seconds(1), scheduler: MainScheduler.instance)
      .subscribe(onNext: { _ in
        print("It works")
      })
  }
}
