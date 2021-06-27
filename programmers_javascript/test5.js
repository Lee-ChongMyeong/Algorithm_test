LISP : 
(defun whatIsFunction(L)
    (cond ((null L) L)
        ((member (car L) (cdr L))
        (whatIsFunction(cdr L)))
        (t (cons (car L) (whatIsFunction(cdr L))))))

