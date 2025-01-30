#include<iostream>
using namespace std;

class d{
  public:
   int da=9;

   d(int x){
    da=x;
   }

   void print() {
    cout<<"hello"<<endl;
   }
};

int main(){
  d v(8);
   d*c=new d(0);
  cout<<v.da;
  // c->print();
  (*c).print();
}