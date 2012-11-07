function draw_b() {
	var b_canvas = document.getElementById("can");
	var b_context = b_canvas.getContext("2d");

	//start at 50 percent
	b_context.clearRect(100,480, 105, 10);
	b_context.fillRect(100, 480, 105, 10);
	
	b_context.fillStyle="Lime";
	
	if(percentBar <=0) {
		percentBar=0;
		b_context.fillRect(100, 480, 0, 10); }
	
	
//5%
	if(percentBar >0 && percentBar <=5) 
	{
		b_context.fillRect(100, 480, 25, 10); }
	if(percentBar >5 && percentBar <= 10) 
	{
		b_context.fillRect(100, 480, 35, 10); }
	
	if(percentBar >10 && percentBar <= 15) 
{
	b_context.fillRect(100, 480, 45, 10); }
	if(percentBar >15 && percentBar <= 20) 
{
	b_context.fillRect(100, 480, 55, 10); }
	
	if(percentBar >20 && percentBar <= 25) 
{
		b_context.fillRect(100, 480, 65, 10); }
//30%

	if(percentBar >25 && percentBar <= 35) 
{
	b_context.fillRect(100, 480, 75, 10); }
//35%

	if(percentBar >35 && percentBar <= 45) 
{
	b_context.fillRect(100, 480, 85, 10); }	
//45%	

	if(percentBar >45 && percentBar <= 50) 
{
	b_context.fillRect(100, 480, 95, 10); }
//50% 

	if(percentBar >50 && percentBar <= 65) 
{
	b_context.fillRect(100, 480, 105, 10); }

//65%	

	if(percentBar >65 && percentBar <= 70) 
{
	b_context.fillRect(100, 480, 115, 10); }

	if(percentBar > 70 && percentBar <= 75)
{
	b_context.fillRect(100, 480, 125, 10); }
//75%

	if(percentBar > 75 && percentBar <=85)
{
	b_context.fillRect(100, 480, 135, 10); }
//85%

	if(percentBar >85 && percentBar <=90) 
{
	b_context.fillRect(100, 480, 145, 10); }

//90%
	if(percentBar >90)
	{
		b_context.fillRect(100, 480, 155, 10); }
	if(percentBar >91)
	{
		b_context.fillRect(100, 480, 157, 10); }
	if(percentBar >92)
	{
		b_context.fillRect(100, 480, 159, 10); }
	if(percentBar >=92 && percentBar <= 94)
	{
		b_context.fillRect(100, 480, 160, 10); }
	if(percentBar >94 && percentBar <= 96)
	{
		b_context.fillRect(100, 480, 170, 10); }
	if(percentBar >96 && percentBar <= 98)
	{
		b_context.fillRect(100, 480, 175, 10); }
	if(percentBar >98 && percentBar <= 99)
	{
		b_context.fillRect(100, 480, 180, 10); }
	//100%
	if(percentBar>=100){
		percentBar=100;
		b_context.fillRect(100, 480, 185, 10);
	}
	

}
