def binary_search(n, item):
    left, right= 0, len(n)
    while right > left:
        middle = (left + right) // 2
        if nums[middle] > item:
            right = middle
        elif nums[middle] < item :
            left = middle + 1
        else:
            return middle
    return None
  def binary_search(n, item, start, end):
    middle = (start + end) // 2
    if start == end:
        return None
    if n[middle] > item:
        return binary_search(n, item, start, middle)
    elif nums[middle] < item:
        return binary_search(n, item, middle + 1, end)
    else:
        return middle
      Pip install tk
from tkinter import *
import tkinter as tk
def binary_search():
    l=e.get().split(" ")
    for i in range(0, len(l)):
        l[i] = int(l[i])
   
    num=(n.get())
    first = 0
    last = len(l)-1
    found = False
    while( first<=last and not found):
        mid = (first + last)//2
        if (l[mid] == num) :
                found = True
        else:
            if num < l[mid]:
                last = mid - 1
            else:
                first = mid + 1
    if found == True:
        Label(window, text="Number found in the list", font=('Calibri')).place(x=280,y=180)
    else:
        Label(window, text="Number NOT found in the list", font=('Calibri')).place(x=240,y=210)
      # Create an instance of tkinter frame or window
window=Tk()
# Set the size of the tkinter window
window.geometry("700x350")
window.title("PythonGeeks")#give title to the window
head=Label(window, text="Let's perform Binary Search", font=('Calibri 15'))# a label
head.pack(pady=20)
Label(window, text="Enter number you want to search", font=('Calibri')).pack()# a label
Entry(window,textvariable=e).pack()
Entry(window,textvariable=n).place(x=280,y=110)#enter a number here
#create a button
Button(window, text="Search", command=binary_search).place(x=320,y=160)
n=tk.IntVar()
window.mainloop()#main command
